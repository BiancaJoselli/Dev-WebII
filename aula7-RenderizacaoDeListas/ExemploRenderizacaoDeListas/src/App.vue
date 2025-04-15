<script setup>
const items = [
    {
    id: 1,
    name: 'Item 1',
    details: { description: 'Item 1 description', price: 10.0 },
    },
    {
    id: 2,
    name: 'Item 2',
    details: { description: 'Item 2 description', price: 20.0 },
    },
    {
    id: 3,
    name: 'Item 3',
    details: { description: 'Item 3 description', price: 30.0 },
    },
];
</script>
<template>
<ul>
    <li v-for="item in items" :key="item.id">
    <p>{{ item.name }}</p>
    <p>{{ item.details.description }}</p>
    <p>{{ item.details.price }}</p>
    </li>
</ul>
</template>