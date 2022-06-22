import { Grid } from '@material-ui/core';
import React from 'react';
import '../styles/UploadSection.css';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const Upload = () => {
    const [option, setOption] = React.useState('new');
    const [videoTitle, setVideoTitle] = React.useState("");
    const [videoDescription, setVideoDescription] = React.useState("");
    const [productName, setProductName] = React.useState("");
    const [productPrice, setProductPrice] = React.useState(0);
    const [productStock, setProductStock] = React.useState(0);
    const [selectedproduct, setSelectedProduct] = React.useState(0);
    const [selectedFile, setSelectedFile] = React.useState(null);

    const getTargetValue = (event) => {
        return event.target.value;
    }
    
    const handleOptionChange = (event) => {
        setOption(getTargetValue(event));
    }

    const handleVideoTitle = (event) => {
        setVideoTitle(getTargetValue(event));
    }

    const handleVideoDescription = (event) => {
        setVideoDescription(getTargetValue(event));
    }

    const handleProductName = (event) => {
        setProductName(getTargetValue(event));
    }

    const handleProductPrice = (event) => {
        setProductPrice(getTargetValue(event));
    }

    const handleProductStock = (event) => {
        setProductStock(getTargetValue(event));
    }

    const handleSelectedProduct = (event) => {
        setSelectedProduct(getTargetValue(event));
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const handleVideoUpload = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('video', selectedFile);
        formData.append('videoTitle', videoTitle);
        formData.append('videoDescription', videoDescription);
        formData.append('uploadType', option);
        if (option === 'new') {
            formData.append('productName', productName);
            formData.append('productPrice', productPrice);
            formData.append('productStock', productStock);
        }
        else {
            formData.append('selectedproduct', selectedproduct);
        }
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
    }

    return (
        <Stack gap={3} className='m-5'>
            <div>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <form className='upload-form mb-3'>
                            <input type="file" placeholder='Click or Drag file here' onChange={handleFileSelect} />
                        </form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>File Name</InputGroup.Text>
                            <FormControl id="file-name" placeholder={selectedFile == null ? '' : selectedFile.name} readOnly />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>File Size</InputGroup.Text>
                            <FormControl id="file-size" placehoder={selectedFile == null ? '' : selectedFile.size} readOnly />
                        </InputGroup>
                        <Form.Group className="mb-3" controlId="video.Name">
                            <Form.Label>Video Title:</Form.Label>
                            <Form.Control type="text" placeholder="Title of your Video" onChange={handleVideoTitle} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="video.Description">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handleVideoDescription} />
                        </Form.Group>

                    </Grid>
                    <Grid item xs={6}>
                        <Form.Check
                            type='radio'
                            value='exists'
                            label='Select existing product'
                            checked={(option === 'exists')}
                            onChange={handleOptionChange}
                        />
                        <ShowItemForm
                            option={option}
                            handleSelectedProduct={handleSelectedProduct}
                        />
                        <Form.Check
                            type='radio'
                            value='new'
                            label='Create new product'
                            checked={(option === 'new')}
                            onChange={handleOptionChange}
                        />
                        <CreateItemForm
                            option={option}
                            handleProductName={handleProductName}
                            handleProductPrice={handleProductPrice}
                            handleProductStock={handleProductStock}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className='upload-button-container my-3'>
                <button className='upload-button' type="submit" onClick={handleVideoUpload}><b>Upload</b></button>
            </div>
        </Stack>
    )
}

const ShowItemForm = (props) => {
    if (props.option === 'exists') {
        return (
            <div className='my-3'>
                <Form.Select onChange={props.handleSelectedProduct}>
                    <option>Select a product!</option>
                    <option value="1">Iphone 99</option>
                    <option value="2">Samsung S55</option>
                    <option value="3">Xiomi Mi 33</option>
                </Form.Select>
            </div>
        )
    }
    return '';
}

const CreateItemForm = (props) => {
    if (props.option === 'new') {
        return (
            <div className='my-3'>
                <Form.Group className="mb-3" controlId="newProduct.name">
                    <Form.Label>Product Name:</Form.Label>
                    <Form.Control type="text" placeholder="Product Name" onChange={props.handleProductName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newProduct.price">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" placeholder="Price" onChange={props.handleProductPrice} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newProduct.stock">
                    <Form.Label>Stock:</Form.Label>
                    <Form.Control type="number" placeholder="Stock" onChange={props.handleProductStock} />
                </Form.Group>
            </div>
        )
    }
    return '';
}

export default Upload;