<template>
  <base-card>
    <section>
      <h2>Register as a coach now!</h2>
    </section>
  </base-card>
  <coach-form @save-data="saveData"></coach-form>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    }
  }
};
</script>
