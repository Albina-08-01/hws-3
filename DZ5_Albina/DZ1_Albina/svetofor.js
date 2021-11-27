
const popup = prompt('Напишите цвет')

switch (popup) {
    case "Зеленый":
        console.log("Можно")
        break;
    case "Желтый":
        console.log("Предупреждение")
        break;
    case "красный":
        console.log("Нельзя")
        break;
    default:
        console.log("Цвет не найден!")
        break;
}