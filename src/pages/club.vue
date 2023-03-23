<script setup lang="ts">
import ChatWindow from 'vue-advanced-chat';
import type { Rooms, Messages } from 'vue-advanced-chat';
import 'vue-advanced-chat/dist/vue-advanced-chat.css';


const currentUserId = ref('1234');
const rooms = ref<Rooms>([]);
const loadingRooms = ref(true);
const roomsLoaded = ref(false);
const fetchMoreRooms = () => {
    setTimeout(async () => {
        const res = await fetch(`https://mock.apifox.cn/m1/2414200-0-default/rooms`);
        const data = await res.json();
        const temp = [...rooms.value, ...data];
        rooms.value = temp;
        loadingRooms.value = false;
    })
}
onMounted(async () => {
    fetchMoreRooms();
})
const messagesLoaded = ref<boolean>(false);
const messages = ref<Messages>([]);
const fetchMessages = () => {
    messagesLoaded.value = false
    setTimeout(async () => {
        const res = await fetch(`https://mock.apifox.cn/m1/2414200-0-default/rooms/{id}/message`);
        const data = await res.json();
        const temp = [...messages.value, ...data];
        messages.value = temp;
        messagesLoaded.value = true;
    });
};

const sendMessage = async ({ roomId, content }: any) => {
    console.log(roomId);
    const date = new Date();
    const data = {
        _id: "99",
        content: content,
        senderId: "1234",
        avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        timestamp: `${date.toLocaleTimeString()}`
    };
    const temp = [...messages.value, data];
    messages.value = temp;
};
</script>

<template>
    <chat-window height="100%" :current-user-id="currentUserId" :load-first-room="false" :loading-rooms="loadingRooms"
        :rooms="rooms" :rooms-loaded="roomsLoaded" :messages="messages" @fetch-more-rooms="fetchMoreRooms"
        :messages-loaded="messagesLoaded" :message-actions="[]" :show-audio="false" :show-files="false"
        :show-reaction-emojis="false" accepted-files="image/*" @fetch-messages="fetchMessages"
        @send-message="sendMessage" />
</template>