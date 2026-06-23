# Zé Ramalho 50 Anos — site refeito

Versão refeita a partir da primeira direção visual aprovada, sem usar páginas do PDF como imagem no layout.

## Estrutura

- `index.html`
- `styles.css`
- `script.js`
- `assets/img/` — imagens geradas/enviadas pelo usuário, otimizadas em WebP para o site
- `assets/logo/sevenx_logo.svg`
- `assets/video/` — pasta reservada para o filme manifesto

## Vídeo

Para inserir o vídeo final, coloque o arquivo em:

`assets/video/ze-ramalho-50-anos.mp4`

ou altere o caminho no bloco `<video>` dentro de `index.html`.

## Observação

As informações do PDF completo foram reorganizadas em uma narrativa de site-manifesto, preservando:
- marco dos 50 anos
- objetivos do projeto
- dimensão nacional
- trilogia
- Fase I — A Jornada
- pilares da Jornada
- roteiro nacional
- encontros históricos
- participações especiais
- lançamento nacional / Fantástico
- legado audiovisual
- diferenciais
- créditos finais SevenX


## Ajustes finais

- Logo textual superior esquerdo centralizado internamente.
- Hero atualizado para `Trilogia • Fase I • O Retrato do Tempo`.
- Maior espaçamento entre eyebrow e título no hero.
- Foto de fundo do hero reposicionada para preservar o rosto do artista.
- Foto de fundo da seção de acontecimento nacional reposicionada com a mesma lógica.


## Correção V5

- Reenquadramento forte do hero com translate inicial para mostrar o rosto do artista.
- Parallax do hero reforçado via JavaScript.
- Overlay do hero suavizado na região do rosto.
- Maior espaçamento entre `Trilogia • Fase I • O Retrato do Tempo` e o título.
- Seção `Acontecimento nacional` refeita com camada de imagem deslocada para preservar o rosto.


## Correção V6

- Logo/nome do header centralizado horizontalmente na tela.
- Navegação mantida no canto direito.


## Correção V7

- Imagens da galeria editorial agora preenchem integralmente os cards, evitando faixa preta ou área vazia dentro da moldura.


## Correção V8

- Foto sentada da galeria configurada com `object-fit: contain` para evitar corte do violão.


## Correção V9

- Foto sentada da galeria voltou para `cover` com zoom/crop específico, para não expor o topo cortado do violão.


## V11 verificada

- Bloco de vídeo substituído por embed do YouTube: https://www.youtube.com/embed/Hf3k7alA-d0
- Removido player MP4 local da seção de vídeo.
- Texto do hero atualizado para `Trilogia • Fase I • O Retrato do Tempo`.
- Mantidos ajustes de header centralizado, parallax, reenquadramento, galeria preenchida e zoom da foto sentada.
