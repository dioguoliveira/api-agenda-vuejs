<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Contatos</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">Contato</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <b-container fluid>
        <b-card>
          <b-button
            class="mb-2"
            variant="primary"
            @click.prevent="$refs.contatoModal.create()"
          >
            <b-icon icon="plus"></b-icon> Adicionar Contato</b-button
          >
          <b-table striped :items="items" :fields="fields">
            <template v-slot:cell(id)="data">
              <b-button-group>
                <b-button
                  @click="$refs.contatoModal.edit(data.value)"
                  variant="info"
                  ><b-icon icon="pencil"></b-icon> Editar</b-button
                >
                <b-button
                  @click="$refs.contatoModal.remove(data.item)"
                  variant="danger"
                  ><b-icon icon="x-circle"></b-icon> Remover</b-button
                >
              </b-button-group>
            </template>
          </b-table>
        </b-card>
      </b-container>
      <!-- /.card -->
    </section>
    <contato-modal ref="contatoModal" @success="listarContatos" />
  </div>
</template>

<script>
import ContatoModal from "../components/ContatoModal";
export default {
  name: "Contato",
  data() {
    return {
      items: [],
      fields: [
        "nome",
        "sexo",
        "telefone",
        "email",
        { key: "id", label: "Ações" },
      ],
    };
  },
  components: {
    ContatoModal,
  },
  mounted() {
    this.listarContatos();
  },
  methods: {
    async listarContatos() {
      const { data } = await axios.get('contatos');
      this.items = data;
    },
  },
};
</script>

<style>
</style>
