const unProtectedRoutes = [
    "/mcqs/link"
]
const routes = {
    inProtecedRoutes: function(route) {
        return unProtectedRoutes.includes(route)
    }
}

export default routes