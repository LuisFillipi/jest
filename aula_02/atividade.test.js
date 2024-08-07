function quadradoNum(numero){
    return numero * numero
}
test("retorna o quadrado do numero", ()=>{
    expect(quadradoNum(2)).toBe(4)
    expect(quadradoNum(2)).toBeGreaterThan(3)
    expect(quadradoNum(2)).toBeLessThan(5)
})
