const url = 'https://qrcode3.p.rapidapi.com/qrcode/text';
const data = new FormData();
data.append('image', '');
data.append('metadata', '{"data":"https://linqr.app","image":{"modules":true},"style":{"module":{"color":"black","shape":"default"},"inner_eye":{"shape":"default"},"outer_eye":{"shape":"default"},"background":{}},"size":{"width":200,"quiet_zone":4},"output":{"filename":"qrcode","format":"svg"}}');

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '9eb42a2ed6msh1b529619eb756fep157389jsn17c74a045814',
		'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
	},
	body: data
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}