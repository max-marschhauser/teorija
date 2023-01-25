CSS SELECTORS:

li:marker{
// mijenja stil točke na listi ( može se korisiti i s content pa staviti neki emotikon )
}

atribute selector
a[href="home"]{ // izabere <a href="home"></a>}
a[href]{ // izabere <a href="bilo šta, sve sa hrefom izabere"></a>}

:is() --> ima jači specificity od običnog selectora (gornji dio primjera)

.example1 h3,
.example1 h4,
.example1 a{

}

.example1 :is(h3, h4, a){

}

a:is(:hover, :focus){

}

:where() --> isto kao :is() samo što nema nikakav specififity

:has() --> parent selector

.example3:has(img) > h1{

}
// ako parent s klasom example3 ima u sebi img tag, onda će se stil primijeniti na parenta (.example3)
