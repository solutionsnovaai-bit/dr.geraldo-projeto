# Proposta Comercial — Dr. Geraldo Souza

Página de proposta comercial desenvolvida pela **Nova AI Solutions**.

Stack: Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion.

---

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve o build para conferir antes de publicar
```

---

## Publicar na Vercel

1. Suba este projeto num repositório do GitHub.
2. Na Vercel, escolha **Add New → Project** e selecione o repositório.
3. A Vercel detecta o Vite sozinha. Se pedir, confirme:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy. O link sai pronto para mandar ao cliente.

---

## O que editar

Quase tudo que muda está em dois arquivos — não precisa mexer nos componentes.

### `src/data/site.ts`
Número de WhatsApp, nome do cliente, data e validade da proposta, valor da taxa
de implementação e os números do comparativo de custo.

### `src/data/planos.ts`
Os três planos: nome, tagline, preço do primeiro mês, mensalidade cheia, itens
inclusos e não inclusos, texto do botão e a mensagem que abre no WhatsApp.

O array `planos` já está na ordem em que os cards aparecem — do mais barato ao
mais caro. Para reordenar, basta reordenar o array.

Também ficam ali as etapas da implementação e as listas de "por nossa conta" /
"contratado direto pelo escritório".

---

## Trocar as imagens

Estão em `public/`:

| Arquivo | Onde aparece |
|---|---|
| `hero-desktop.webp` | Topo, telas de 768px para cima |
| `hero-mobile.webp` | Topo, telas menores que 768px |
| `monograma.webp` | Tela de carregamento e rodapé |
| `favicon.png` | Aba do navegador |
| `og-image.jpg` | Prévia ao compartilhar o link |

As duas artes do topo têm fundo preto puro (`#000000`) e recebem uma máscara
radial (`.fusao-hero`, em `src/index.css`) que dissolve as bordas no fundo da
página. Se trocar por outra imagem, mantenha o fundo em preto puro — em JPG a
compressão altera o preto e a emenda fica visível.

---

## Estrutura

```
src/
├── App.tsx                 orquestra o carregamento e a ordem das seções
├── index.css               tokens, utilitários e a máscara de fusão do hero
├── data/
│   ├── site.ts             configuração geral
│   └── planos.ts           planos, etapas e listas
└── components/
    ├── Loader.tsx          abertura com o monograma
    ├── Hero.tsx            arte sangrando + título
    ├── Balanca.tsx         comparativo de custo (SVG animado)
    ├── Planos.tsx          os três cards
    ├── Transparencia.tsx   o que entra e o que não entra no valor
    ├── Etapas.tsx          as quatro etapas da implementação
    ├── Fechamento.tsx      chamada final
    ├── Rodape.tsx          assinatura e nota metodológica
    ├── ZapFlutuante.tsx    botão de WhatsApp que segue o scroll
    └── Reveal.tsx          animação de entrada reaproveitada
```

---

## Acessibilidade

Respeita `prefers-reduced-motion`: quem tiver animações reduzidas no sistema vê
a página inteira estática, sem perder conteúdo.
