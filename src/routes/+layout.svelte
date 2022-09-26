<script>
    import '../app.css';
    import Navbar from '../components/Navbar.svelte';
</script>

<div class="min-h-screen bg-zinc-600">
    <Navbar />
    <slot />
</div>
