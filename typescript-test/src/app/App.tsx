export default function App() {
	let randNum: number = 2;
	randNum = 3;

	let array: readonly number[] = [1, 2, 3];

	console.log(array);

	function addNum(x: number, y: number): number {
		return x + y;
	}

	let message: string | number = "Error message";
	message = 404;

	function log(numOrString: number | string): void {
		console.log(numOrString);
	}

	return <></>;
}
