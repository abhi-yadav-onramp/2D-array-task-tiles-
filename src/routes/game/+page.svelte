<script>
	let arr = [
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1]
	];
	
	let position = [];
	const handleClick = (e, pos) => {
		// position = [...position, pos];
		const { i, j } = pos;
		position.unshift({ op: 1 - arr[i][j], pos });
		position = position;

		arr[i][j] = 1 - arr[i][j];
		const status = arr[i][j];
		if (status) {
			e.target.classList.add('dark');
			e.target.classList.remove('light');
		} else {
			e.target.classList.remove('dark');
			e.target.classList.add('light');
		}

		console.log(position);
	};
	const handleReplay = () => {
		if (position.length > 0) {
			const element = position.pop();
			// console.log(element);
			const { i, j } = element.pos;
			arr[i][j] = 1 - element.op;
		}
		console.log(position);
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
							handleClick(e, { i, j });
							console.log('clicked');
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
	button {
		width: 320px;
		height: 50px;
		border-radius: 10px;
	}

	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		/* width: 500px;
		height: 500px; */
		/* background-color: blue; */
	}
	.row {
		display: flex;
		justify-content: center;
	}

	.ele {
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		text-align: center;
		/* background-color: blue; */
		margin: 10px;
	}
	.dark {
		background-color: rgb(121, 115, 115);
	}
	.light {
		background-color: white;
	}
</style>
