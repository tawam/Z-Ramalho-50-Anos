# Zé Ramalho 50 Anos — Trilogia | Site Manifesto

Site estático criado para GitHub Pages.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No GitHub, vá em **Settings > Pages**.
4. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Aguarde o GitHub gerar o link público.

## Estrutura

- `index.html` — conteúdo e hierarquia do site.
- `styles.css` — identidade visual, responsividade, tipografia e animações.
- `script.js` — menu mobile, barra de progresso e efeitos de entrada.
- `assets/img` — imagens provisórias extraídas do PDF enviado como base visual.
- `assets/textures/noise.png` — textura de grão usada sobre o site.

## Como substituir imagens

Mantenha os mesmos nomes dos arquivos dentro de `assets/img`, ou altere os caminhos no CSS/HTML.

Arquivos principais:

- `hero-poster.webp` — imagem do hero inicial.
- `obra-brasil.webp` — seção “Uma obra que atravessou o Brasil”.
- `momento-agora.webp` — seção “O momento é agora”.
- `trilogia.webp` — seção “Trilogia”.
- `jornada.webp` — seção “Fase I — A Jornada”.
- `origens.webp` — card “As origens”.
- `estrada.webp` — card “A estrada”.
- `povo.webp` — card “O povo”.
- `brasil-palco.webp` — seção “O Brasil como palco”.

## Observação sobre acervo

As imagens atuais são placeholders visuais extraídos do material recebido. Para publicação externa, substitua por imagens, vídeos e acervos com autorização de uso.

## Fontes

O site carrega fontes via Google Fonts:

- Bebas Neue
- Libre Baskerville
- Space Grotesk

Não há fonte embutida no pacote.


## Vídeo

Foi adicionada uma seção `#video`. Para usar o vídeo final, coloque o arquivo em `assets/video/ze-ramalho-50-anos.mp4` ou altere o caminho no `index.html`.

## Créditos finais

Foi adicionada uma seção de créditos finais com logo textual SevenX e os créditos da página final do PDF.


## Logo SevenX

A logo final da agência foi adicionada em `assets/logo/sevenx_logo.svg` e aplicada na seção de créditos finais.
