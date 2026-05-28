import styles from './SnackForm.module.css';
import { useEffect, useState } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });
  const isEditing = Boolean(editingSnack);

  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }, [editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateName() || !validateRating()) {
      setTouched((prev) => ({ ...prev, name: true, rating: true }));
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
    }
  }
  function validateName() {
    if (name.trim() !== '') {
      return true;
    } else {
      return false;
    }
  }
  function validateRating() {
    if (rating !== '') {
      return true;
    } else {
      return false;
    }
  }
  function getNameError() {
    const errorMessageName = 'Snack name is required';
    if (!validateName() && touched.name) {
      return errorMessageName;
    } else {
      return null;
    }
  }

  function getRatingError() {
    const errorMessageRating = 'Please select a rating';
    if (!validateRating() && touched.rating) {
      return errorMessageRating;
    } else {
      return null;
    }
  }
  const nameError = getNameError();
  const ratingError = getRatingError();

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          className={styles['field-input']}
          placeholder="Enter snack name"
          onChange={(event) => setName(event.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
        />
        {nameError && <div className={styles.error}>{nameError}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          onChange={(event) => setRating(event.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
        />
        {ratingError && <div className={styles.error}>{ratingError}</div>}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
