function loadContent(page) {
    const content = document.getElementById("main-content");
    
    switch(page) {
        case 'inicio':
            content.innerHTML = `
                <h2>Inicio</h2>
                <p>Bienvenido al sistema de control de inventario de TEWU. Aquí podrás gestionar tus productos, verificar existencias y realizar reportes de manera eficiente.</p>
            `;
            break;
        case 'servicios':
            content.innerHTML = `
                <h2>Servicios</h2>
                <p>Explora nuestros servicios para gestionar eficientemente el inventario y los recursos de tu empresa.</p>
            `;
            break;
        case 'agregar':
            content.innerHTML = `
                <h2>Agregar Producto</h2>
                <p>Aquí puedes agregar nuevos productos al inventario. Llena el formulario con los detalles del producto.</p><br>
                <form id="formAltaProducto">

                    <input type="text" id="nombre" placeholder="Nombre del Producto" required>

                    <input type="text" id="descripcion" placeholder="Descripción" required>

                    <input type="number" id="precio" placeholder="Precio" required>
                    
                    <button type="submit">Dar de Alta</button>
                </form>
            `;
            break;
        case 'nosotros':
            content.innerHTML = `
                <h2>Nosotros</h2>
                <p>Conoce más sobre el equipo de TEWU y nuestra misión para ofrecer un sistema de inventario confiable.</p>
            `;
            break;
        case 'contacto':
            content.innerHTML = `
                <h2>Baja</h2>
                <p>Contáctanos para obtener más información o asistencia técnica.</p>
            `;
            break;
        case 'iniciarSesion':
            content.innerHTML = `
                <h2>Iniciar Sesión</h2>
                <p>Por favor, inicia sesión para acceder a todas las funcionalidades del sistema.</p>
                <form>
                    <label>Usuario:</label><br>
                    <input type="text" name="usuario"><br><br>
                    <label>Contraseña:</label><br>
                    <input type="password" name="contrasena"><br><br>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            `;
            break;
        case 'modificar':
            content.innerHTML = `
            <h2> Modificar </h2>
            <p>Selecciona Registro</p>


            `;
            break;
        default:
            content.innerHTML = `
                <h2>Bienvenido</h2>
                <p>Selecciona una opción en el menú para comenzar.</p>
            `;
            break;
    }
}