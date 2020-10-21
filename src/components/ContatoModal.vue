<template>
  <div>
    <b-modal
      id="contato-modal"
      title="Contato"
      @ok.prevent="submit"
      @hidden="fields = {}"
      ok-variant="primary"
      :ok-title="action.method == 'post' ? 'Adicionar' : 'Alterar'"
      cancel-title="Fechar"
    >
      <b-form>
        <b-form-group id="input-group-1" label="Nome" label-for="input-1">
          <b-form-input
            id="input-2"
            v-model="fields.nome"
            required
            placeholder="Digite o nome Completo"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Sexo:" label-for="input-2">
          <b-form-select v-model="fields.sexo" :options="sexo"></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-3" label="Telefone:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="fields.telefone"
            required
            placeholder="(99) 99999-9999"
            v-mask="'(##) #####-####'"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Email:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="fields.email"
            type="email"
            required
            placeholder="email@email.com"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ContatoModal",
  data() {
    return {
      fields: {
        nome: null,
        sexo: null,
        telefone: null,
        email: null,
      },
      action: {},
      sexo: [
        { value: null, text: "Selecione uma Opção" },
        { value: "M", text: "Masculino" },
        { value: "F", text: "Feminino" },
      ],
    };
  },
  methods: {
    create() {
      this.action = {
        url: "contatos",
        method: "post",
      };
      this.$bvModal.show("contato-modal");
    },
    async edit(id) {
      try {
        const { data } = await axios.get(`contatos/${id}`);
        this.fields = data;
        this.$bvModal.show("contato-modal");
        this.action = {
          url: "contatos",
          method: "put",
        };
      } catch (e) {
        console.error(e);
      }
    },
    async remove(contato) {
      try {
        const { data } = await axios({
          method: "delete",
          url: "contatos",
          data: contato,
        });
        this.$emit("success");
      } catch (e) {
        console.error(e);
      }
    },
    async submit() {
      try {
        const { data } = await axios({
          method: this.action.method,
          url: this.action.url,
          data: this.fields,
        });
        this.$emit("success");
        this.$nextTick(() => this.$bvModal.hide("contato-modal"));
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>