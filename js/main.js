

// var answerGrade = []
// answerGrade.push("1");
// answerGrade.push("5");
// answerGrade.push("Perfect");



// finalResult.push({question: answerGrade[0], grade: answerGrade[1], comment: answerGrade[2]});

// var tableRow = finalResult[1]

// var grade = document.getElementById("grade");

// grade.addEventListener("click", function(){
//     currGrade = grade.textContent;
//     console.log(currGrade);
// });

// var input = document.querySelector("input[type='submit']");

// input.addEventListener("click", function(){
//     currComment = input.textContent;
//     console.log(currComment);
// })


finalResult = [
	{
		question: 1,
		grade: "4",
		comment: "Here comes the comment",
	},
		{
		question: 2,
		grade: "3",
		comment: "Here comes the comment",
	},
		{
		question: 3,
		grade: "5",
		comment: "Here comes the comment",
	},
		{
		question: 4,
		grade: "4",
		comment: "Here comes the comment",
	},
		{
		question: 5,
		grade: "4",
		comment: "Here comes the comment",
	}
]


var j = 0;

for (var i=0; i<=4; i++) {
	var node = document.createElement("tr");

	var node1 = document.createElement("td");
	var node2 = document.createElement("td");
	var node3 = document.createElement("td");

	var textNode1 = document.createTextNode(finalResult[j]["question"]);
	var textNode2 = document.createTextNode(finalResult[j]["grade"]);
	var textNode3 = document.createTextNode(finalResult[j]["comment"]);
	j++;

	node1.appendChild(textNode1);
	node2.appendChild(textNode2);
	node3.appendChild(textNode3);


	node.appendChild(node1);
	node.appendChild(node2);
	node.appendChild(node3);

	document.getElementById("table-body").appendChild(node);
}