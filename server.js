require("dotenv").config();
const express = require("express");
const cors = require("cors");
const notesRoutes = require("./src/routes/notesRoutes");
const contactsRoutes = require("./src/routes/contactsRoutes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", notesRoutes);
app.use("/api", contactsRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
