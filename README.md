# Zer0 Terminal

Zer0 Terminal é um projeto de terminal de linha de comando com uma interface gráfica desenvolvida em **Electron**. O objetivo deste projeto é criar uma aplicação desktop para interagir com o sistema de forma simples e eficiente, utilizando a tecnologia Electron para construir interfaces gráficas de usuário (GUI) e possibilitar uma experiência nativa no desktop.

## Funcionalidades

- **Interface gráfica com Electron**: Um terminal completo e interativo com uma interface gráfica para facilitar a interação.
- **Desempenho otimizado**: O terminal é projetado para ser leve e rápido, utilizando recursos nativos de sistemas operacionais.
- **Aceleração de Hardware (opcional)**: Suporte para aceleração de hardware para melhorar o desempenho gráfico.
- **Suporte ao WSL**: Projeto configurado para rodar no Windows Subsystem for Linux (WSL), permitindo integração fácil com o sistema de arquivos do Windows.
- **Personalização e configurações**: O terminal pode ser personalizado e configurado para atender às suas necessidades específicas.

## Instalação

Siga os passos abaixo para rodar o **Zer0 Terminal** na sua máquina:

### Pré-requisitos

- **Node.js**: O projeto requer o Node.js para instalar as dependências.
- **npm** ou **yarn**: O gerenciador de pacotes para instalar as dependências.

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/Zer0G0ld/Zer0Terminal.git
   cd Zer0Terminal
   ```

2. Instale as dependências:

   Usando **npm**:

   ```bash
   npm install
   ```

   Ou usando **yarn**:

   ```bash
   yarn install
   ```

3. Para iniciar a aplicação:

   ```bash
   npm start
   ```

   Ou, se preferir, use o seguinte comando para rodar com desabilitação de aceleração de hardware:

   ```bash
   ELECTRON_ENABLE_HARDWARE_ACCELERATION=0 npm start
   ```

## Como Contribuir

Contribuições são sempre bem-vindas! Se você tem uma ideia ou encontrou um bug, fique à vontade para abrir uma **issue** ou enviar um **pull request**.

1. Faça um fork deste repositório.
2. Crie uma branch com a sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório (`git push origin feature/nome-da-feature`).
5. Abra um **pull request**.

## Licença

Este projeto é licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Tecnologias Usadas

- **Electron**: Framework para criar aplicações desktop com JavaScript, HTML e CSS.
- **Node.js**: Ambiente de execução JavaScript para backend.
- **npm**: Gerenciador de pacotes para gerenciar dependências.

## Desenvolvedor

- **Zer0G0ld**: [Perfil GitHub](https://github.com/SEU_USUARIO)

---

*Se tiver alguma dúvida ou precisar de ajuda, entre em contato comigo pelo GitHub ou [email](mailto:SEU_EMAIL).* 
