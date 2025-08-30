export const menuItems = [
 modulo-admin-usarios
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/dashboard',
    },
    {
      title: 'Empleos',
      icon: 'mdi-briefcase',
      children: [
        { title: 'Empleos', to: '/empleos/Empleos' },
      ],
    },
    {
      title: 'Usuarios',
      icon: 'mdi-account-group',
      children: [
        { title: 'Lista de Usuarios', to: '/users' },
        { title: 'Crear Usuario', to: '/users/create' },
      ],
    },
    {
      title: 'Configuraciones',
      icon: 'mdi-cog',
      to: '/settings',
    },
  ]