# RESUMO PARA ABRIR UM NOVO CHAT — ZÉ RAMALHO 50 ANOS

Data do pacote: 2026-06-24 18:53

## 1. Objetivo geral do projeto

Estamos criando um site-manifesto para apresentar o projeto:

**ZÉ RAMALHO 50 ANOS — TRILOGIA**

A proposta é convencer tomadores de decisão de que os 50 anos de carreira de Zé Ramalho não devem ser tratados como uma turnê comemorativa comum, mas como uma celebração nacional de grande escala.

A pergunta central da narrativa é:

**“Por que os 50 anos de Zé Ramalho merecem se transformar em uma celebração nacional?”**

O site deve transmitir:
- grandeza cultural;
- relevância nacional;
- memória afetiva;
- escala de operação;
- visão de futuro;
- linguagem rústica, editorial, cinematográfica e moderna, sem virar “site moderno genérico”.

## 2. Estilo visual aprovado

O estilo que o usuário aprovou é:

- visual rústico + editorial;
- preto, off-white, bege/pastel e dourado envelhecido;
- tipografia grande, condensada, de impacto;
- blocos bem espaçados;
- hierarquia cinematográfica;
- fotos em preto e branco / tritone leve;
- cantos pouco arredondados, entre 3px e 5px;
- layout limpo, mas com presença forte;
- evitar excesso de textura, pois uma versão anterior com papel/texturas ficou ruim;
- seguir a primeira estrutura boa criada, sem reinventar a roda.

## 3. Última versão de trabalho

A última versão trabalhada é a **V18 — FOTO 08 NATURAL**.

Ela já inclui:
- site completo;
- fotos finais aplicadas;
- mapa SVG aplicado;
- embed de YouTube no vídeo;
- correção de foto 08 para não ter faixa preta nem zoom exagerado.

Arquivos principais:
- `index.html`
- `styles.css`
- `script.js`
- `assets/img/`
- `assets/logo/sevenx_logo.svg`

## 4. Link do site publicado

Repositório/site:
https://tawam.github.io/Z-Ramalho-50-Anos/

Observação:
Em certo momento o GitHub Pages estava publicando versão V13/V14 parcial. A forma correta de subir é enviar o conteúdo da raiz do ZIP, não a pasta do ZIP dentro do repositório.

A raiz do repositório deve ficar assim:

```txt
index.html
styles.css
script.js
assets/
README.md
```

Nunca assim:

```txt
ZE_RAMALHO_50_ANOS_SITE_FINAL_PARA_NOVO_CHAT/
  index.html
  styles.css
  assets/
```

## 5. Link do vídeo no YouTube

O vídeo foi hospedado no YouTube:

https://youtu.be/Hf3k7alA-d0

Embed usado no HTML:

```html
https://www.youtube.com/embed/Hf3k7alA-d0
```

O bloco antigo de MP4 local foi substituído por iframe do YouTube.

## 6. Alterações importantes já aplicadas

### Hero
- Foto da hero ajustada para não parecer “fantasma morto”.
- Mantida em P&B com diminuição suave de exposição.
- Header com “Zé Ramalho / 50 anos” centralizado no topo.
- Texto superior da hero ajustado para:
  **Trilogia • Fase I • O Retrato do Tempo**
- Parallax suave no hero foi tentado e aplicado em versões anteriores, mas conferir se continua agradável no publicado.

### Dimensão
Na seção **“Um projeto com a dimensão de sua história.”**:
- manter **50 shows previstos**;
- retirar “aproximadas”;
- remover bloco **20+ cidades**;
- trocar “1 ano de celebração” por **1 ano de turnê**.

### Sinônimos
Foi criada uma área específica para **Sinônimos**, com destaque próprio.

Texto aprovado:

> “Sinônimos” é uma das canções mais emblemáticas da música brasileira. Um encontro histórico entre Zé Ramalho e Chitãozinho & Xororó que atravessa décadas, emociona diferentes gerações e permanece viva na memória afetiva do país. Celebrar essa obra nos 50 anos de carreira de Zé Ramalho é criar a oportunidade de transformar uma história já consagrada em um momento verdadeiramente histórico.

### Convidados especiais
Na seção **“Convidados especiais, em datas selecionadas, como homenagem à trajetória.”**:
- placeholder/foto de Elba Ramalho acima do texto dela;
- placeholder/foto de João Ramalho acima do texto dele;
- bloco “O elo entre gerações” com foto ao lado.

Texto destacado sobre João:

> Entre todas as participações possíveis, João Ramalho representa uma presença especialmente simbólica: a permanência de uma história construída ao longo de cinco décadas e o caráter familiar, afetivo e histórico desta celebração.

### Síntese do projeto
Na área:

**“Porque ela reúne escala, narrativa e permanência.”**

O texto **“A maior celebração da carreira de Zé Ramalho.”** foi separado da lista e virou área de destaque própria com foto.

Texto:
> Este projeto não pretende transformar a obra de Zé Ramalho. Pretende celebrá-la, valorizá-la, ampliar seu alcance e construir uma comemoração compatível com a importância que essa trajetória possui para a música brasileira.

### A maior turnê
Na seção **“A maior turnê da carreira de Zé Ramalho.”**:
- inserir mapa do Brasil estilizado logo abaixo do título;
- informações adicionadas:
  - Duração: Fevereiro de 2027 a Março de 2028
  - Abertura: SÃO PAULO | Nu Bank Arena
  - Encerramento: RIO DE JANEIRO | Farmacy Arena
  - Shows até 10 mil pessoas
  - Todas as regiões do Brasil
  - Capitais e mercados estratégicos
  - Ações especiais em cidades emblemáticas

Meses por região:
- Abril — Sudeste
- Maio — Centro-Oeste
- Junho e Julho — Nordeste
- Setembro — Sul
- Novembro — Norte

### “Não existe outro aniversário de 50 anos”
- Foto 01 aplicada abaixo do título/subtítulo, não no topo da coluna direita.
- O usuário corrigiu isso antes: placeholder/foto deve ficar junto da narrativa principal, logo abaixo do texto.

### “Uma história grande demais para caber em uma única turnê”
- Foto 02 aplicada no placeholder da seção.

## 7. Mapeamento das fotos finais

O usuário enviou imagens numeradas e pediu estes usos:

1. `foto-01.webp`  
   Local: seção **“Não existe outro aniversário de 50 anos.”**

2. `foto-02.webp`  
   Local: seção **“Uma história grande demais para caber em uma única turnê.”**

3. `mapa-brasil.svg`  
   Local: seção **“A maior turnê da carreira de Zé Ramalho.”**, logo abaixo do título.

4. `foto-03.webp`  
   Local: seção **“Momentos únicos. Momentos memoráveis.”**  
   Substituir a foto que estava lá.

5. `foto-04-elba.webp`  
   Local: card da **Elba Ramalho**.

6. `foto-05-joao.webp`  
   Local: card do **João Ramalho**.

7. `foto-06-elo.webp`  
   Local: placeholder ao lado de **“O elo entre gerações.”**

8. `foto-07-fantastico.webp`  
   Local: seção **“Do Fantástico para as estradas.”**

9. `foto-08-celebracao.webp`  
   Local: placeholder ao lado de **“A maior celebração da carreira de Zé Ramalho.”**

## 8. Problema recente resolvido: foto 08

A foto 08 estava com uma faixa preta embaixo. Foi tentado corrigir com zoom/crop via CSS, mas ficou “estourada demais”, com o rosto gigante.

Correção final V18:
- recomposta em proporção horizontal usando a própria foto como fundo suave;
- removida a faixa preta;
- removido o zoom agressivo;
- arquivos alterados:
  - `assets/img/foto-08-celebracao.webp`
  - `styles.css`

A regra CSS agressiva V17 foi removida.

## 9. Como verificar se o GitHub Pages subiu a versão correta

Depois de subir, abrir o site e conferir visualmente:
- fotos novas aparecem nos placeholders;
- mapa aparece na seção de turnê;
- vídeo é YouTube embed, não player HTML5 local;
- a seção “A maior celebração...” mostra foto 08 sem faixa preta e sem zoom exagerado.

No repositório, abrir `index.html` e usar Ctrl+F:
- procurar `foto-01.webp`
- procurar `foto-08-celebracao.webp`
- procurar `mapa-brasil.svg`
- procurar `youtube.com/embed/Hf3k7alA-d0`

Se não encontrar, o arquivo subido não é a versão correta.

## 10. Próximos cuidados

- O usuário está com prazo apertado e precisa de respostas rápidas.
- Evitar refatorar o site inteiro sem necessidade.
- Alterações pequenas devem preferencialmente mexer só em `styles.css` ou só em `index.html`.
- Sempre dizer exatamente quais arquivos foram alterados.
- Quando gerar ZIP, gerar sempre com os arquivos direto na raiz.
- Evitar criar pastas internas desnecessárias dentro do ZIP.
- Se houver problema de cache, usar query string `?v=18`, `?v=19`, etc. nas imagens ou pedir hard refresh.

## 11. Personalidade e forma de responder ao usuário

Responder em português, direto, com humor leve, mas sem enrolação.
O usuário gosta de linguagem adulta/descolada, mas neste ponto está frustrado com demora.
Priorizar:
- “feito”
- link do ZIP
- lista curta de arquivos alterados
- instrução prática para subir

Evitar textão desnecessário quando ele estiver só pedindo ajuste operacional.


---

## Atualização 2026-06-30

- Turnê ajustada para **50 shows previstos**.
- Linguagem territorial ajustada para **todas as regiões do Brasil**.
- Adicionado placeholder para mockup do ônibus oficial da turnê.
- Participações especiais reorganizadas por praça como **previstas**.
- Estratégia nacional de divulgação reforçada com Fantástico, Altas Horas, Marcos Mion e assessoria de imprensa nacional.
- Criada seção exclusiva de merchandising oficial com destaque para o vinil comemorativo.
