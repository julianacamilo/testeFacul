# User Management and Authentication System

## Descrição do Projeto
Este projeto é um sistema básico de gerenciamento de usuários e autenticação, desenvolvido com **Next.js** e **TypeScript**. Ele permite o cadastro e login de usuários, garantindo validações de segurança, como unicidade de e-mail e requisitos mínimos para senhas.

## Funcionalidades

### Cadastro de Usuário
- Permite cadastrar um usuário com **nome**, **e-mail** e **senha**.
- Valida se o **e-mail** é único.
- Valida se a **senha** atende aos requisitos de segurança (mínimo de 8 caracteres).

### Login
- Permite que o usuário faça login utilizando **e-mail** e **senha**.
- Valida se o **e-mail** e a **senha** estão corretos.

## Regras de Negócio
- O **e-mail** deve ser único, ou seja, dois usuários não podem ter o mesmo e-mail.
- A **senha** deve ter pelo menos **8 caracteres**.

## Tecnologias Utilizadas
- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **React Hook Form**: Biblioteca para gerenciamento de formulários em React.
- **Vitest**: Ferramenta de testes unitários para projetos JavaScript e TypeScript.

## Planejamento de Qualidade de Software

### Requisitos de Qualidade
- **Cobertura de Código**: Alcançar pelo menos 90% de cobertura de código nos testes unitários.
- **Desempenho**: O tempo de resposta para login deve ser inferior a 200ms.
- **Manutenibilidade**: O código deve ser modular e seguir as melhores práticas de desenvolvimento.
- **Legibilidade**: O código deve ser claro e bem documentado.
- **Segurança**: As senhas devem ser armazenadas de forma segura (hashing).
- **Escalabilidade**: O sistema deve ser capaz de lidar com um grande número de usuários.
- **Confiabilidade**: O sistema deve ser robusto e lidar corretamente com erros.
- **Usabilidade**: A interface do usuário deve ser intuitiva e fácil de usar.
- **Compatibilidade**: O sistema deve funcionar em diferentes navegadores e dispositivos.
- **Testabilidade**: O sistema deve ser fácil de testar e manter.

### Estratégia de Testes
#### Testes de Unidade
- Testar cada funcionalidade do sistema de forma isolada.
- Garantir que cada função retorna os resultados esperados para entradas válidas.

#### Testes de Exceção
- Validar se o sistema lida corretamente com erros, como **e-mails duplicados** e **senhas curtas**.
- Garantir que as mensagens de erro apropriadas são retornadas.

#### Testes de Limites
- Testar senhas com menos de 8 caracteres.
- Testar e-mails duplicados para garantir que o sistema os rejeita.

## Planejamento de Refatoração e Melhoria Contínua

### Refatoração
- Eliminar códigos duplicados ou complexos.
- Melhorar a legibilidade do código.

### Melhoria de Desempenho
- Analisar e otimizar o tempo de resposta para login.
- Implementar caching onde aplicável.

### Melhoria de Segurança
- Implementar hashing de senhas.
- Garantir que todas as entradas do usuário sejam validadas e sanitizadas.

### Melhoria de Usabilidade
- Realizar testes de usabilidade com usuários reais.
- Coletar feedback e iterar na interface do usuário.

## Casos de Teste

### Cadastro de Usuário
1. **Teste de Dados Válidos**: Verificar se o sistema aceita dados válidos de cadastro.
2. **Teste de E-mail Duplicado**: Verificar se o sistema rejeita dados com e-mail duplicado.
3. **Teste de Senha Curta**: Verificar se o sistema rejeita senhas com menos de 8 caracteres.

### Login de Usuário
1. **Teste de Credenciais Corretas**: Verificar se o login é bem-sucedido com as credenciais corretas.
2. **Teste de Credenciais Incorretas**: Verificar se o login falha com cred
3. **Teste de Email Não Cadastrado**: Verificar se o sistema rejeita login com email não cadastrado.

## Como Rodar o Projeto

### 1. Clone o Repositório
git clone https://github.com/julianacamilo/testeFacul.git
cd teste

### 2. Instale as Dependências
npm install 

### 3. Inicie o Servidor de Desenvolvimento
npm run dev

### 4.  Executar os Testes
npm run test



