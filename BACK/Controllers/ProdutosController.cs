using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;
using ApiTcc.Data;
using ApiTcc.Models;
using ApiTcc.Models.Enuns;
using BACK.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiTcc.Controllers
{
    //[Authorize(Roles = "Associado")]
    [ApiController]
    [Route("[controller]")]
    public class ProdutosController : ControllerBase
    {

        private readonly DataContext _context;

        private readonly IHttpContextAccessor _httpContextAccessor;

        public ProdutosController(DataContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<bool> ProdutoExistente (string codigoProduto)
        {
            if(await _context.Produtos.AnyAsync(x => x.codigoProduto.ToLower() == codigoProduto.ToLower()))
            {
                return true;
            }
            return false;
        }

        private int ObterUsuarioId()
        {
            return int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
        }

        private string ObterPerfilUsuario()
        {
            return _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Role);
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Produto> lista = await _context.Produtos.OrderByDescending(p => p.produtoId) 
                    .Where(p => p.qtdProduto != 0)
                    .ToListAsync();
                return Ok(lista);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingle(int id)
        {
            try
            {
                Produto pd = await _context.Produtos
                    .Include(a => a.Associado).FirstOrDefaultAsync(pdBusca => pdBusca.produtoId == id);

                return Ok(pd);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }           
        }

        [HttpGet("GetByUser")]
        
        public async Task<IActionResult> GetByUserAsync()
        {
            try
            {
                int id = int.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

                List<Produto> lista = await _context.Produtos
                    .Where(a => a.associadoId == id).ToListAsync();

                return Ok(lista);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetByPerfil")]
        
        public async Task<IActionResult> GetByPerfilAsync()
        {
            try
            {
                List<Produto> lista = new List<Produto>();

                if(ObterPerfilUsuario() == "Admin")
                    lista = await _context.Produtos.ToListAsync();
                else
                {
                    lista = await _context.Produtos.Where(p => p.Associado.associadoId == ObterUsuarioId()).ToListAsync();
                }

                return Ok(lista);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetByCategoria/{categoriaId}")]
        
         public async Task<IActionResult> GetByCategoria(int categoriaId)
         {
             try
            {
                List<Produto> listaFinal = await _context.Produtos
                .Where(p => p.categoriaProduto == (CategoriaEnum)categoriaId)
                .Where(p => p.qtdProduto != 0)
                .OrderByDescending(p => p.produtoId).ToListAsync();

                if(listaFinal.Count == 0)
                    return NotFound("Nenhum produto encontrado.");
                
                return Ok(listaFinal);
            }
            catch (System.Exception)
            {
                
                throw;
            }
         }


        [HttpPost]
        public async Task<IActionResult> Add(Produto novoProduto)
        {

             try
             {
                 if (await ProdutoExistente(novoProduto.codigoProduto))
                     throw new System.Exception("Código de produto já existe");

                novoProduto.Associado = _context.Associados.FirstOrDefault(aBusca => aBusca.associadoId == ObterUsuarioId());

                novoProduto.nomeCadAssociado = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
                novoProduto.emailCadAssociado = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email);
                novoProduto.telCadAssociado = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.MobilePhone);
                novoProduto.enderecoCadAssociado = _httpContextAccessor.HttpContext .User.FindFirstValue(ClaimTypes.Country);
                await _context.Produtos.AddAsync(novoProduto);
                await _context.SaveChangesAsync();

                return Ok(novoProduto.produtoId);
             }
                catch (Exception ex)
                {
                
                 return BadRequest(ex.InnerException);
                }
        }


         [HttpPut]
         public async Task<IActionResult> Update(Produto novoProduto)
         {
            try
            {
                if (novoProduto.nomeProduto == "" && novoProduto.precoProduto == 0)
                {
                    throw new Exception("Campos Nome e Preço não podem estar vazios!");
                }

                 novoProduto.Associado = _context.Associados.FirstOrDefault(aBusca => aBusca.associadoId == ObterUsuarioId());
                
                 _context.Produtos.Update(novoProduto);
                 int linhasAfetadas = await _context.SaveChangesAsync();

                 return Ok(linhasAfetadas);
             }
             catch (Exception ex)
             {
                
                 return BadRequest(ex.Message);
             }
         }

      
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
               Produto pdRemover = await _context.Produtos
                .FirstOrDefaultAsync(pd => pd.produtoId == id);

                _context.Produtos.Remove(pdRemover);
                int linhasAfetadas = await _context.SaveChangesAsync();

                return Ok(linhasAfetadas);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }


    [HttpPost("PhotoUpload"), DisableRequestSizeLimit]
        public async Task<IActionResult> UploadProdPhoto()
        {
            try
            {
                var formCollection = await Request.ReadFormAsync();
                var file = formCollection.Files.First();
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var prodPhoto = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { prodPhoto });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }




    }
}