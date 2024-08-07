/** procura itens em um array */

const lista = ["Banana","melão","Melancia","maça"]

test("Identifica 'maça' no array ", ()=>{
expect(lista).toContain("maça")
expect(lista).not.toContain("maracuja")
expect(lista).toHaveLength(4)
})

function retornaErro(Error) {
 throw new Error ("Isso é um erro!")
}
test("Retorna um erro", ()=>{
    expect(()=> retornaErro()).toThrow()
})

/** Testando funções assincronas */

const fetchData = async () => "Ford Ka";

test("espera que o dado seja 'Ford Ka'", async () => {
const carro = await fetchData();
expect(carro).toBe("Ford Ka")
})
