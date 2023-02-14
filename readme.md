VSCODE SHORTCUTS

select something
CTRL + SHIFT + L
(selects all that are the same as selected)

CTRL + L
(izabere cijeli red)

:is() --> ima jači specificity od običnog selectora
.div :is(h3, h4, a){}
a:is(:hover, :focus){}

:where() --> isto kao :is() samo što nema nikakav specififity

:has() --> parent selector
.div:has(img){}
