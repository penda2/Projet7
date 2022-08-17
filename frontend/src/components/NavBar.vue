<template>
    <nav>
        <div id="container">
            <div class="logo">
                <img alt="logo groupomania" src="../assets/icon.png" class="img" />
                <h1>Groupomania</h1>
            </div>
            <div class="links">
                <ul>
                    <li class="login">
                        <button class="btn-logout" @click="logout">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
name: "NavBar",
methods: { logout() {
    localStorage.removeItem('token')
    this.$router.push('/Login')
}
}
}
</script>