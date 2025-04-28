O projeto apresentado implementa um Perceptron Simples, que é um modelo de rede neural artificial amplamente utilizado para a classificação binária de dados linearmente separáveis.

A página pode ser visualizada em: https://CzarFontanella.github.io/perceptron

Desenvolvido por Frank Rosenblatt em 1958, o Perceptron é uma unidade inspirada no neurônio biológico, que aprende a classificar dados.
Ele recebe entradas, aplica pesos e um viés (bias), e então utiliza uma função de ativação para produzir uma saída binária (0 ou 1).
É um modelo de aprendizado supervisionado que, através do treinamento, aprende a separar dados linearmente.
O Perceptron é considerado um dos algoritmos mais básicos e importantes na história da Inteligência Artificial e do Aprendizado de Máquina (Machine Learning).

Como este Perceptron Funciona?
  O objetivo deste Perceptron é aprender a separar dois grupos de pontos (classes) em um plano 2D, baseando-se em exemplos (dados rotulados como "classe 1" ou "classe -1").

  Ele faz isso por meio de:
    -> Receber entradas (coordenadas dos pontos x e y, mais um viés).
    -> Multiplicar as entradas pelos pesos (parâmetros que o modelo ajusta durante o treinamento).
    -> Somar todos os valores multiplicados.
    -> Aplicar uma função de ativação (sign), que define a qual classe o ponto pertence:
    -> Se o resultado for positivo, a saída é +1.
    -> Se for negativo, a saída é -1.
    -> Comparar a saída com o valor esperado (rótulo verdadeiro do ponto) e ajustar os pesos se o modelo errou.

Estrutura do Projeto

  * Classe Perceptron: Representa o modelo de rede neural. Responsável por realizar as adivinhações (guess) e pelo treinamento (train).

  * Classe Point: Representa um ponto no espaço 2D, com coordenadas x e y, e seu respectivo rótulo de classe (1 ou -1).

  * Classe Sketch: Controla a aplicação do modelo na interface gráfica, atribuindo valores como número de pontos, tamanho do canvas, execução de chamadas do perceptron, entre outros.

  * Interface Gráfica:
    -> Os pontos são desenhados em um canvas.
    -> Pontos verdes indicam classificações corretas, pontos vermelhos indicam erros.
    -> Linhas mostram a divisão real e a linha aprendida pelo perceptron.

Etapas do Funcionamento
  *Inicialização:
    -> Cria-se um conjunto de pontos aleatórios (points) para treinar o perceptron.
    -> Cada ponto é automaticamente rotulado (label) de acordo com sua posição em relação à linha f(x).

  *Treinamento:
    -> Em cada ciclo (draw()), o perceptron é treinado com um ponto.
    -> Se o perceptron errar, ele ajusta seus pesos usando o erro calculado.

  *Teste:
    -> Depois de terminar o treinamento, novos pontos são usados para medir a capacidade de generalização do modelo.

  *Visualização:
    -> O sistema mostra visualmente se o perceptron está acertando ou errando.
    -> A linha que o perceptron "acha" que separa os pontos é desenhada em azul.

Aplicação
  Este projeto demonstra de maneira prática:
  * O conceito de aprendizado supervisionado (treinar a partir de exemplos com resposta correta).
  * Como um algoritmo simples pode aprender a classificar dados sem intervenção humana além do treinamento inicial.
  * Conceitos fundamentais de redes neurais e inteligência artificial, como:
    -> Ajuste de pesos;
    -> Função de ativação (neste caso, o sinal sign);
    -> Generalização do modelo para novos dados.
