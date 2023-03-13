import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';

const ProductDetailPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://example.com/product-image.jpg' }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Product Name</Text>
        <Text style={styles.description}>Product Description</Text>
        <Text style={styles.featuresTitle}>Product Features</Text>
        <View style={styles.feature}>
          <Text style={styles.featureName}>Feature 1</Text>
          <Text style={styles.featureValue}>Value 1</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureName}>Feature 2</Text>
          <Text style={styles.featureValue}>Value 2</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureName}>Feature 3</Text>
          <Text style={styles.featureValue}>Value 3</Text>
        </View>
        <Text style={styles.reviewsTitle}>Product Reviews</Text>
        <View style={styles.review}>
          <Text style={styles.reviewAuthor}>Review Author</Text>
          <Text style={styles.reviewText}>Review Text</Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewAuthor}>Review Author</Text>
          <Text style={styles.reviewText}>Review Text</Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewAuthor}>Review Author</Text>
          <Text style={styles.reviewText}>Review Text</Text>
        </View>
        <Text style={styles.videoTitle}>Product Video</Text>
        <View style={styles.videoContainer}>
          {/* <Video source={{ uri: 'https://example.com/product-video.mp4' }} style={styles.video} /> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: 400,
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  featureName: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 10,
  },
  featureValue: {
    flex: 1,
    textAlign: 'right',
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

});
export default ProductDetailPage;