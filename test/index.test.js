const pegaArquivo = require('../index');

describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  });

  it('deve retornar array com resultados', async () => {
    const result = await pegaArquivo('./test/arquivos/texto1.md');
    expect(result).toEqual(
      [
        {
          FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
        },
      ],
    );
  });

  it('deve retornar o texto "não há links"', async () => {
    const result = await pegaArquivo('./test/arquivos/texto1_semLinks.md');
    expect(result).toEqual('não há links');
  });
});
