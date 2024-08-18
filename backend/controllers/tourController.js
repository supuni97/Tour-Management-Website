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
export const updateTour = async (req, res) => {

    const id = req.params.id

    try {

        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res
            .status(200)
            .json({
                success: true,
                message: 'Success',
                data: updatedTour,
            });


    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: 'Fail' })

    }

}


//delete tour
export const deleteTour = async (req, res) => {

    const id = req.params.id

    try {

        await Tour.findByIdAndDelete(id);

        res
            .status(200)
            .json({
                success: true,
                message: 'Success'
            });


    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: 'Fail' })

    }

}

//getSIngle tour
export const getSIngleTour = async (req, res) => {

    const id = req.params.id

    try {

        const tour = await Tour.findById(id);

        res
            .status(200)
            .json({
                success: true,
                message: 'Success',
                data: tour
            });


    } catch (err) {
        res
            .status(404)
            .json({ success: false, message: 'not found' })

    }
}

//getAll tours
export const getAllTour = async (req, res) => {


    //for pagination
    const page = parseInt(req.query.page)

    try {

        const tours = await Tour.find({})
        .skip(page*8)
        .limit(8);

        res
            .status(200)
            .json({
                success: true,
                count:tours.length,
                message: 'Success',
                data: tours
            });


    } catch (err) {
        res
            .status(404)
            .json({ success: false, message: 'not found' })

    }

}

//get tour by search
export const getTourBySearch = async (req, res) => {

    const city = new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {

        const tours = await Tour.find({city, distance:{$gte:distance},
        maxGroupSize:{$gte:maxGroupSize}})
    

        res
            .status(200)
            .json({
                success: true,
                message: 'Success',
                data: tours
            });


    } catch (err) {
        res.status(500).json({ success: false, message: 'Fail', error: err.message });

    }

}

//get featured tour 
export const getFeaturedTours = async (req, res) => {

   
    try {

        const tours = await Tour.find({featured:true}).limit(8);

        res
            .status(200)
            .json({
                success: true,
                message: 'Success',
                data: tours
            });


    } catch (err) {
        res.status(500).json({ success: false, message: 'Fail', error: err.message });

    }

}

//get tour counts
export const getTourCount = async (req, res) => {

   
    try {

        const tourCount = await Tour.estimatedDocumentCount()

        res
            .status(200)
            .json({
                success: true,
                message: 'Success',
                data: tourCount
            });


    } catch (err) {
        res.status(500).json({ success: false, message: 'Fail', error: err.message });

    }

}