import React from 'react';

const Asset = ({ name, description, latitude, longitude }) => (
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{name}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <div>{latitude} - {longitude}</div>
          {description}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
)

export default Asset