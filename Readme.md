### **Dio Bank**

#### **Descrição**
O projeto **Dio Bank** é um sistema bancário simplificado desenvolvido em **TypeScript**. Este projeto foi criado como parte da **Formação TypeScript Fullstack Developer** da **DIO**. O objetivo principal é implementar e praticar conceitos básicos de orientação a objetos (OOP), como herança, polimorfismo e encapsulamento, enquanto trabalhamos com tipos e validações no TypeScript.

---

### **Funcionalidades**

- **Contas bancárias**
  - Criação de contas pessoais, empresariais e de grandes empresas.
  - Depósitos e saques com validações específicas para cada tipo de conta.
- **Validações**
  - Apenas contas com status ativo podem realizar transações.
  - Verificação de saldo antes de permitir saques.
- **Diferenciação por tipo de conta**
  - **Conta Pessoal**: Conta padrão com métodos básicos de depósito, saque e consulta de saldo.
  - **Conta Empresarial**: Suporte para empréstimos.
  - **Conta de Grandes Empresas**: Depósitos com bônus de R$10 por operação.

---

### **Tecnologias Utilizadas**

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev) para execução do projeto em ambiente de desenvolvimento.

---

### **Como Rodar o Projeto**

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/dio-bank.git
cd dio-bank
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
npm run dev
```

---

### **Classes e Estrutura**

1. **DioAccount (Classe Abstrata)**
   - Atributos privados: `name`, `accountNumber`, `balance`, `status`.
   - Métodos principais:
     - `deposit(money: number)`: Adiciona saldo.
     - `withdraw(money: number)`: Retira saldo, se válido.
     - `getBalance()`: Exibe o saldo atual.
     - `validateStatus()`: Verifica se a conta está ativa.

2. **PeopleAccount**
   - Herda de `DioAccount`.
   - Atributo adicional: `doc_id` (número do documento).

3. **CompanyAccount**
   - Herda de `DioAccount`.
   - Método adicional:
     - `getLoan(money: number)`: Adiciona saldo como um empréstimo.

4. **BigCompanyAccount**
   - Herda de `DioAccount`.
   - Sobrescrita do método:
     - `deposit(money: number)`: Adiciona saldo com bônus de R$10 por depósito.

---

### **Desafios Implementados**

- [x] Implementar os métodos de depósito e saque na classe `DioAccount`.
- [x] Implementar o método de empréstimo (`getLoan`) na classe `CompanyAccount`.
- [x] Criar um novo tipo de conta (`BigCompanyAccount`) com bônus para depósitos.
- [x] Restringir a modificação direta dos atributos `name` e `accountNumber`.
- [x] Garantir que apenas contas ativas realizem transações.

---

### **Exemplo de Uso**

```typescript
import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { BigCompanyAccount } from "./class/BigCompanyAccount";

const peopleAccount = new PeopleAccount(1, "Lele", 10, 100);
peopleAccount.deposit(50);
console.log(peopleAccount.getBalance());

const companyAccount = new CompanyAccount("DIO", 20, 500);
companyAccount.getLoan(300);
console.log(companyAccount.getBalance());

const bigCompanyAccount = new BigCompanyAccount("Big DIO", 12345, 1000);
bigCompanyAccount.deposit(200);
console.log(bigCompanyAccount.getBalance());
```

---

### **Autor**

Projeto baseado no aprendizado fornecido por [Nathally Souza](https://github.com/nathyts). Adaptações e melhorias realizadas por [Leticia Moraes](https://github.com/leticia-emily-moraes), como parte da **Formação TypeScript Fullstack Developer** da **DIO**.

---

### **Licença**

Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para utilizá-lo e contribuir!