<template>
    <main>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="card-title">Periodos</h5>
                    </div>
                    <div class="col-md-6 text-end">
                        <a href="#" class="btn-new" title="New">Novo Periodo</a>
                    </div>
                </div>
            </div>
            <img src="@/assets/imagens/painel/img3.jpg" class="card-img-bottom" alt="Imagem de capa do card">
        </div>
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>xxx</td>
                    <td><a href="" class="btn btn-primary" title="Alterar"> <i class="bi bi-pencil"></i></a>
                        <a href="" class="btn btn-danger" title="Deletar"><i class="bi bi-trash"></i></a>
                    </td>
                </tr>
                <tr>
                    <td scope="row">1</td>
                    <td>xxx</td>
                    <td><a href="" class="btn btn-primary" title="Alterar"> <i class="bi bi-pencil"></i></a>
                        <a href="" class="btn btn-danger" title="Deletar"><i class="bi bi-trash"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script setup>

</script>

<style scoped>
a {
    text-decoration: none;
}

main {
    margin: 100px 10px 10px 10px;
}

.card {
    background: #212121;
    border-radius: 10px 10px 0px 0px;
}

.card h5 {
    color: #0f5;
}

.card-img-bottom {
    border-radius: 0;
}

.card img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    object-position: center;
}

.btn-new {
    background: transparent;
    color: #0f5;
    padding: 10px 20px;
    border-radius: 4px;
    transition: 0.3s;
    border: transparent 1px solid;
}

.btn-new:hover {
    border: #0f5 1px solid;

}

th {
    color: #0f5;
}

th,
td {
    background: #212121;
    text-align: center;
}

.btn {
    margin-right: 5px;
}
</style>