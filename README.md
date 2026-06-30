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


## V12 — Revisões do cliente

- Hero ajustado para foto P&B sem efeito de luz/sepia, com exposição reduzida suavemente.
- Bloco Dimensão: removido `20+ cidades`, `50 shows previstos` sem `aproximadas`, e `1 ano de turnê`.
- Bloco Sinônimos destacado como área própria.
- Placeholders adicionados para Elba Ramalho, João Ramalho e fotos futuras.
- Texto de João Ramalho destacado com novo bloco editorial.
- Bloco `Por que esta celebração é diferente?` reorganizado com destaque final e placeholder.
- Bloco Brasil ampliado com duração, abertura, encerramento, capacidade, meses por região e placeholder do mapa.


## Ajuste V13

- Placeholder da seção `Não existe outro aniversário de 50 anos` movido para baixo do texto principal da seção.
- Placeholder do mapa do Brasil movido para abaixo do título `A maior turnê da carreira de Zé Ramalho`.


## Ajuste V14 — Fotos finais

- Foto 01 inserida na seção `Não existe outro aniversário de 50 anos`.
- Foto 02 inserida na seção `Uma história grande demais para caber em uma única turnê`.
- Mapa SVG inserido na seção `A maior turnê da carreira de Zé Ramalho`.
- Foto 03 inserida em `Momentos únicos. Momentos memoráveis`.
- Fotos 04 e 05 inseridas em Elba Ramalho e João Ramalho.
- Foto 06 inserida no bloco `O elo entre gerações`.
- Foto 07 inserida em `Do Fantástico para as estradas`.
- Foto 08 inserida no bloco `A maior celebração da carreira de Zé Ramalho`.


## V16 URGENTE — Fotos OK

Este pacote foi gerado para subir direto na RAIZ do GitHub Pages.

Checklist confirmado:
- `index.html` contém a marca `V16_URGENTE_FOTOS_OK`.
- Todas as imagens novas estão em `assets/img/`.
- O mapa SVG está em `assets/img/mapa-brasil.svg`.
- Os `src` das imagens usam `?v=16` para evitar cache.
- Os placeholders antigos das áreas solicitadas não aparecem mais no HTML desta versão.


## V17 — Correção foto 08

- Ajustado o enquadramento da foto 08 no bloco `A maior celebração da carreira de Zé Ramalho`.
- O ajuste é feito por CSS, com zoom/crop suave para esconder a faixa preta inferior da imagem.
- Arquivo alterado: `styles.css`.

## V18 — Foto 08 natural

- A foto 08 foi recomposta em 16:11 usando a própria imagem como fundo suave, evitando faixa preta e evitando zoom excessivo.
- O CSS agressivo anterior dessa foto foi removido.
- Arquivos alterados: `assets/img/foto-08-celebracao.webp` e `styles.css`.


---

## Atualização 2026-06-30

- Turnê ajustada para **50 shows previstos**.
- Linguagem territorial ajustada para **todas as regiões do Brasil**.
- Adicionado placeholder para mockup do ônibus oficial da turnê.
- Participações especiais reorganizadas por praça como **previstas**.
- Estratégia nacional de divulgação reforçada com Fantástico, Altas Horas, Marcos Mion e assessoria de imprensa nacional.
- Criada seção exclusiva de merchandising oficial com destaque para o vinil comemorativo.
