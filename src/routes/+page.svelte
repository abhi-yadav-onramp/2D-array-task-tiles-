<script>
	let arr = [
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1]
	];
	let isClicked = arr.map((x) => x.map((y) => false));
	console.log(isClicked);
	let position = [];

	const handleClick = (pos) => {
		// position = [...position, pos];

		const { i, j } = pos;
		isClicked[i][j] = true;
		position.push(pos);
		position = position;

		arr[i][j] = 1 - arr[i][j];
	};

	const handleReplay = () => {
		position.map(async (ele, idx) => {
			setTimeout(
				function () {
					const { i, j } = ele;
					arr[i][j] = 1 - arr[i][j];
					isClicked[i][j] = false;
				},
				1000 + 1000 * idx
			);

			// await delay(1000);
		});
		position = [];

		// if (position.length > 0) {
		// 	const element = position.pop();
		// 	// console.log(element);
		// 	const { i, j } = element;
		// 	arr[i][j] = 1 - arr[i][j];
		// 	isClicked[i][j] = false;
		// }
	};
</script>

<section>
	<div>
		{#each arr as row, i}
			<div class="row">
				{#each row as ele, j}
					<div
						class={ele === 1 ? 'ele dark' : 'ele light'}
						on:click={(e) => {
							if (!isClicked[i][j]) {
								handleClick({ i, j });
							}

							// console.log('clicked');
						}}
					></div>
				{/each}
			</div>

			<br />
		{/each}
	</div>
	<center><button on:click={handleReplay}>replay</button></center>
</section>

<style>
	/* Enhanced button style */
	button {
		width: 320px;
		height: 50px;
		border-radius: 10px;
		background-color: #1e88e5;
		color: white;
		border: none;
		cursor: pointer;
		font-size: 16px;
		transition: background-color 0.3s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	button:hover {
		background-color: #1565c0;
	}

	/* Section styling */
	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
		padding: 20px;
		border-radius: 15px;
		box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
		max-width: 600px;
		margin: auto;
	}

	/* Row styling */
	.row {
		display: flex;
		justify-content: center;
	}

	/* Tile styling */
	.ele {
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 10px;
		border-radius: 8px;
		cursor: pointer;
		transition:
			transform 0.3s ease-in-out,
			box-shadow 0.3s ease-in-out;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.dark {
		background-color: rgb(61, 59, 59);
		color: white;
	}

	.light {
		background-color: white;
		color: rgb(61, 59, 59);
	}

	.ele:hover {
		transform: scale(1.1);
		box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
	}
</style>
