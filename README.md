# TriangleClassifier

## Descrição do Projeto

Este projeto é uma aplicação em **TypeScript** que classifica um triângulo com base nos comprimentos de seus três lados. Ele verifica a validade do triângulo, a existência de lados com valores negativos e, em seguida, determina se o triângulo é Equilátero, Isósceles ou Escaleno.

## Funcionalidades

*   **Validação de Entrada:** Verifica se os lados informados são números positivos.
*   **Condição de Existência:** Garante que os lados fornecidos podem formar um triângulo (a soma de dois lados deve ser maior que o terceiro).
*   **Classificação:**
    *   **Triângulo Equilátero:** Todos os três lados são iguais.
    *   **Triângulo Isósceles:** Dois lados são iguais.
    *   **Triângulo Escaleno:** Todos os três lados são diferentes.

## Estrutura do Projeto

```
TriangleClassifier/
├── dist/                 # Diretório de saída dos arquivos JavaScript compilados
├── node_modules/         # Dependências do projeto instaladas pelo npm
├── src/                  # Código fonte em TypeScript
│   ├── classify-triangle.ts  # Lógica principal de classificação do triângulo
│   ├── cli.ts                # Interface de linha de comando para interação com o usuário
│   ├── index.ts              # Ponto de entrada da aplicação
│   └── utils.ts              # Funções auxiliares para validação e tipos de triângulo
├── package.json          # Metadados do projeto e scripts
├── package-lock.json     # Registro exato das dependências
└── tsconfig.json         # Configurações do compilador TypeScript
```

## Como Rodar o Projeto

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/nataliavieirab/TriangleClassifier.git
    cd TriangleClassifier
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Compile o TypeScript:**

    ```bash
    npm run build
    ```

### Execução

```bash
node dist/index.js
```

### Exemplos de Uso

#### Triângulo Equilátero

```
Digite o primeiro número: 5
Digite o segundo número: 5
Digite o terceiro número: 5

Triângulo Equilátero!
Deseja verificar um novo triângulo? [s/n] --> n
```

#### Triângulo Isósceles

```
Digite o primeiro número: 5
Digite o segundo número: 5
Digite o terceiro número: 3

Triângulo Isósceles!
Deseja verificar um novo triângulo? [s/n] --> n
```

#### Triângulo Escaleno

```
Digite o primeiro número: 3
Digite o segundo número: 4
Digite o terceiro número: 5

Triângulo Escaleno!
Deseja verificar um novo triângulo? [s/n] --> n
```

#### Lados Inválidos (Negativos)

```
Digite o primeiro número: -1
Digite o segundo número: 2
Digite o terceiro número: 3

Foi informado pelo menos um valor negativo. Informe somente valores positivos!
Deseja verificar um novo triângulo? [s/n] --> n
```

#### Não é um Triângulo Válido

```
Digite o primeiro número: 1
Digite o segundo número: 2
Digite o terceiro número: 5

Os valores informados não seguem a condição de existência de um triângulo.
Deseja verificar um novo triângulo? [s/n] --> n
```
