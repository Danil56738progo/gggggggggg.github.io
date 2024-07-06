<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Запись расходов и доходов</title>
    <link rel="stylesheet" href="my.css" />
  </head>
  <body>
    <div class="container">
      <h1>Запись расходов и доходов</h1>
      <form id="transactionForm">
        <label for="type">Тип операции:</label>
        <select id="type">
          <option value="income">Доход</option>
          <option value="expense">Расход</option></select
        ><br /><br />
        <label for="amount">Сумма (в злотых):</label>
        <input type="number" id="amount" required /><br /><br />
        <button type="submit">Добавить</button>
      </form>
      <div id="transactions"></div>
    </div>

    <script src="my.js"></script>
  </body>
</html>



body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h1 {
  text-align: center;
  color: #333;
}

form {
  text-align: center;
}

input[type="number"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

#transactions {
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
}
