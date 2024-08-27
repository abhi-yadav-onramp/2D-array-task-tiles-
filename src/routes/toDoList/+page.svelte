<script>
	let items = [];

	const handleSubmit = () => {
		const item = document.querySelector('#item');
		items = [...items, { name: item.value, checked: false }];
		console.log(items);
		item.value = '';
	};

	const handleChecked = (name) => {
		// console.log(e.target.class);
		// e.target.class = 'checked';
		// console.log(e.target.class);
		// items = [...items, { name: name, checked: true }];
		items = items.map((item) => (item.name === name ? { ...item, checked: !item.checked } : item));
		console.log(items);
	};
</script>

<div class="items">
	<div class="input">
		<input type="text" id="item" />
		<button onclick={handleSubmit}>add</button>
	</div>

	<ul>
		{#each items as item (item)}
			<li onclick={() => handleChecked(item.name)}>
				<!-- {item.name} -->
				{#if item.checked}
					<b><s>{item.name}</s></b>
				{:else}
					<b>{item.name}</b>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	li {
		text-decoration: none;
	}
	.input {
		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.items {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.items li {
		font-family: 'arial', 'Source Sans Pro', 'Arial', sans-serif;
	}

	.items li:hover {
		cursor: pointer;
	}
</style>
