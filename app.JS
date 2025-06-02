function criaCartao(categoria, pergunta, resposta){
   let container = document.getElementById('container')
   let cartao = document.createrElement('article')
   cartao.className = 'cartao'
   cartao.innerHTML = `
   <article class="cartao">
                <div class="cartao__conteudo">
                        <h3> Programação</h3>
                              <div class="cartao__conteudo__pergunta">
                                    <p>O que e JavaScript?</p>
                                </div>                        
                               <div class="cartao__conteudo__resposta">
                                    <p>O CSS é uma linguagem de estilização.</p>
                                 </div>
                                </div>   
                 </article>
                 `
                 container.appendChild(cartao)
}