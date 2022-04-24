<template>
  <span :title="humanFriendlyDate(timestamp)">
    {{ diffForHumans(timestamp) }}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizeDate from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizeDate)

export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  setup(props) {
    const diffForHumans = () => dayjs.unix(props.timestamp).fromNow()

    const humanFriendlyDate = () => dayjs.unix(props.timestamp).format('llll')

    return {
      diffForHumans,
      humanFriendlyDate
    }
  }
}
</script>

<style></style>
