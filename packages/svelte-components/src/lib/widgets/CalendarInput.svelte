<script lang="ts">
  import Svelty from 'svelty-picker'

  type InputMode = 'auto' | 'date' | 'datetime' | 'time'

  export let manual = false;
  export let mode: InputMode = 'auto'
</script>

<Svelty pickerOnly={!manual} {mode} />
