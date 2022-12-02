<template>
  <section>
    <div class="description">
      <h3>Calendar</h3>
      <button>Create Calendar</button>
    </div>
    <div class="content" style="overflow-x: auto">
      <table>
        <thead>
          <tr>
            <th></th>
            <th class="active">Monday 17</th>
            <th>Tuesday 18</th>
            <th>Wednesday 19</th>
            <th>Thursday 20</th>
            <th>Friday 21</th>
            <th>Saturday 22</th>
            <th>Sunday 23</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ddasdasd</td>
            <td><BoxAlert></BoxAlert></td>
            <td><BoxAlert></BoxAlert></td>
            <td><BoxAlert></BoxAlert></td>
            <td><BoxAlert></BoxAlert></td>
            <td><BoxAlert></BoxAlert></td>
            <td><BoxAlert></BoxAlert></td>
            <td><BoxAlert></BoxAlert></td>
          </tr>
          <tr>
            <td>adad</td>
            <td>dasdasd</td>
            <td>dsada</td>
            <td>sads;</td>
            <td>dasda</td>
            <td>adsadsa</td>
            <td>adad</td>
            <td>adasd</td>
          </tr>
          <tr>
            <td>dasda</td>
            <td>adsadsa</td>
            <td>adad</td>
            <td>adasd</td>
            <td>dasda</td>
            <td>adsadsa</td>
            <td>adad</td>
            <td>adasd</td>
          </tr>
          <tr>
            <td>dasda</td>
            <td>adsadsa</td>
            <td>adad</td>
            <td>adasd</td>
            <td>dasda</td>
            <td>adsadsa</td>
            <td>adad</td>
            <td>adasd</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "CalendarView",
  components: {
    BoxAlert: defineAsyncComponent(() => import("../components/BoxAlert.vue")),
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.description {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
table {
  border-collapse: collapse;
  padding: 5px;
  width: 100%;
  th {
    border-bottom: 1px solid #e8e9eb;
    padding: 5px;
    color: #c9d4d8;

    &.active {
      color: #313030;
    }
  }
  td {
    border-bottom: 1px solid #e8e9eb;
    height: 120px;
    color: #313030;
    width: 10%;
  }
  td:first-child {
    border-right: 1px solid #e8e9eb;
    width: 5%;
  }
}
</style>
