# INSTRUÇÕES PARA SUBIR NO GITHUB PAGES

## Subida correta

1. Baixe o ZIP final.
2. Extraia o ZIP.
3. Entre na pasta extraída.
4. Selecione o conteúdo interno:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/`
   - `README.md`
5. Suba estes arquivos diretamente na raiz do repositório `Z-Ramalho-50-Anos`.

A raiz do repositório precisa ficar assim:

```txt
index.html
styles.css
script.js
assets/
README.md
```

## O erro que estava acontecendo

Provavelmente foi enviada uma pasta inteira para dentro do repositório, ou o `index.html` antigo continuou na raiz.

GitHub Pages sempre carrega o `index.html` da raiz configurada. Se a versão nova estiver dentro de uma subpasta, ela não aparece no site.

## Testes rápidos após subir

Abra:
https://tawam.github.io/Z-Ramalho-50-Anos/

Depois faça hard refresh:

- Windows: `Ctrl + F5`
- Chrome: abrir em aba anônima

No GitHub, abra o arquivo `index.html` e procure:

```txt
foto-01.webp
foto-08-celebracao.webp
mapa-brasil.svg
youtube.com/embed/Hf3k7alA-d0
```

Se aparecer tudo, o HTML correto subiu.
Se o site ainda não mostrar, é cache/propagação do GitHub Pages.
