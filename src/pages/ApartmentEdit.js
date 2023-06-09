import React from "react";
import { useState } from "react";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const ApartmentEdit = ({ apt, updateApt  }) => {
  const { id } = useParams() 
    let currentApt = apt?.find((apartments) => apartments.id === +id)

   

  const [editApt, setEditApt] = useState({
    id: currentApt?.id,
    street: currentApt?.street || '',
    unit: currentApt?.unit || '',
    city: currentApt?.city || '',
    state: currentApt?.state || '',
    square_footage: currentApt?.square_footage || '',
    price: currentApt?.price || '',
    bedrooms: currentApt?.bedrooms || '',
    bathrooms: currentApt?.bathrooms || '',
    pets: currentApt?.pets || '',
    image: currentApt?.image || '',
    user_id: '1'

  });


  const handleChange = (e) => {
    console.log(e.target.value);
    setEditApt({ ...editApt, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    updateApt(editApt);
    navigate(`/apartmentshow/${id}`);
  };

  return (
    <>
      <Form
        className=" shadow-lg shadow-gray-400 border-gray-200 border-4 p-4 rounded-lg"
        style={{ width: "50%", margin: "auto" }}
      >
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            id="apt-street"
            name="street"
            placeholder="Enter street here"
            type="text"
            onChange={handleChange}
            value={editApt.street}
          />
        </FormGroup>
        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input
            id="apt-unit"
            name="unit"
            placeholder="Enter unit here"
            type="text"
            onChange={handleChange}
            value={editApt.unit}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            id="apt-city"
            name="city"
            placeholder="Enter city here"
            type="text"
            onChange={handleChange}
            value={editApt.city}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            id="apt-state"
            name="state"
            placeholder="Enter state here"
            type="text"
            onChange={handleChange}
            value={editApt.state}
          />
        </FormGroup>
        <FormGroup>
          <Label for="squarefootage">Square Footage</Label>
          <Input
            id="apt-sqft"
            name="square_footage"
            placeholder="Enter sqft. here"
            type="text"
            onChange={handleChange}
            value={editApt.square_footage}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            id="apt-bedroom"
            name="bedrooms"
            placeholder="Enter # of bedrooms here"
            type="text"
            onChange={handleChange}
            value={editApt.bedrooms}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            id="apt-bathroom"
            name="bathrooms"
            placeholder="Enter # of bathrooms"
            type="text"
            onChange={handleChange}
            value={editApt.bathrooms}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets allowed:</Label>
          <Input
            id="apt-pets"
            name="pets"
            placeholder="Pets allowed?"
            type="text"
            onChange={handleChange}
            value={editApt.pets}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            id="apt-price"
            name="price"
            placeholder="Enter price here"
            type="text"
            onChange={handleChange}
            value={editApt.price}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            id="apt-image"
            name="image"
            placeholder="Enter image URL here"
            type="text"
            onChange={handleChange}
            value={editApt.image}
          />
        </FormGroup>

        <Button onClick={handleSubmit} name="button">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ApartmentEdit;