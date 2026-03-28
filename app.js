const express= require('express');



const app= express();
app.use(express.json());
const authRoute= require('./routes/authRoutes');
const eventRoutes= require('./routes/eventRoutes');
const participantRoutes = require('./routes/participantRoutes');
//Routes
app.use('api/v1/auth',authRoute)
app.use('api/v1/events',eventRoutes)
app.use('/api/v1/participants', participantRoutes);
// Health check
app.get('/', (req, res) => {
    res.send("Virtual Event Backend Running");
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});