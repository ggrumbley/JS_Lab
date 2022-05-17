<div class="inventory">Inventory</div>

<style>
  .inventory {
    grid-area: Inventory;
    background-color: limegreen;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: auto;
  }

  .inventory-slot {
    display: flex;
    flex-direction: column;
    height: 100px;
    background-color: lightcoral;
    font-size: 150%;
    border: lightseagreen 1px solid;
    justify-content: center;
    align-items: center;
  }
</style>
