import Tour from '../models/Tour.js';

//create new tour
export const createTour = async (req, res) => {

    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        res
            .status(200)
            .json({
                success: true,
                message: 'Success',
                data: savedTour
            });

    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: 'Fail' })

    }

}

//update tour
export const updateTour = async (req,res) => {

    try {
        
    } catch (err) {
        
    }
    
}


//delete tour
export const deleteTour = async (req,res) => {

    try {
        
    } catch (err) {
        
    }
    
}

//getSIngle tour
export const getSIngleTour = async (req,res) => {

    try {
        
    } catch (err) {
        
    }
    
}

//getAll tour
export const getAllTour = async (req,res) => {

    try {
        
    } catch (err) {
        
    }
    
}