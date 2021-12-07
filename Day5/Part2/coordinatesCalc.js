const calculate = lines => {
    let diagramLength = Math.max(...[...lines.map(line => line.x1), ...lines.map(line => line.x2)]) + 1;
    let diagramHeight = Math.max(...[...lines.map(line => line.y1), ...lines.map(line => line.y2)]) + 1;

    let diagram = [...Array(diagramHeight)].map(x => Array(diagramLength).fill(0))

    let consideredLines = lines.filter(line => isHorizontal(line) || isDiagonal(line));

    consideredLines.forEach(line => {
        if (isDiagonal(line)) {
            let currentX = line.x1;
            let currentY = line.y1;
            if (currentX < line.x2 && currentY < line.y2) {
                while (currentX <= line.x2 && currentY <= line.y2) {
                    let value = diagram[currentY][currentX];
                    diagram[currentY][currentX] = value + 1;
                    currentX++;
                    currentY++;
                }
            } else if (currentX < line.x2 && currentY > line.y2) {
                while (currentX <= line.x2 && currentY >= line.y2) {
                    let value = diagram[currentY][currentX];
                    diagram[currentY][currentX] = value + 1;
                    currentX++;
                    currentY--;
                }
            } else if (currentX > line.x2 && currentY < line.y2) {
                while (currentX >= line.x2 && currentY <= line.y2) {
                    let value = diagram[currentY][currentX];
                    diagram[currentY][currentX] = value + 1;
                    currentX--;
                    currentY++;
                }
            } else if (currentX > line.x2 && currentY > line.y2) {
                while (currentX >= line.x2 && currentY >= line.y2) {
                    let value = diagram[currentY][currentX];
                    diagram[currentY][currentX] = value + 1;
                    currentX--;
                    currentY--;
                }
            }

        } else {
            let startX = Math.min(line.x1, line.x2);
            let endX = Math.max(line.x1, line.x2);
            let startY = Math.min(line.y1, line.y2);
            let endY = Math.max(line.y1, line.y2);
            for (let x = startX; x <= endX; x++) {
                for (let y = startY; y <= endY; y++) {
                    let value = diagram[y][x];
                    diagram[y][x] = value + 1;
                }
            }
        }

    });

    let dangerPointCounter = 0;

    for (let row = 0; row < diagramHeight; row++) {
        for (let column = 0; column < diagramLength; column++) {
            if (diagram[row][column] >= 2) {
                dangerPointCounter++;
            }
        }
    }

    return dangerPointCounter;
}

const isHorizontal = (line) => {
    return line.x1 === line.x2 || line.y1 === line.y2;
}

const isDiagonal = (line) => {
    return Math.abs(line.x1 - line.x2) === Math.abs(line.y1 - line.y2);
}

module.exports = {
    calculate
}