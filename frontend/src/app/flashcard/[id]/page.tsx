import Header from "@/components/Header";
import FlashcardItemList from "@/components/List/FlashcardItemList";
import CreateFlashcardModal from "@/components/Modal/CreateFlashcardModal";

function FlashcardPage() {
  return (
    <>
      <Header title="Flashcards">
        <CreateFlashcardModal />
      </Header>
      <div className="mt-5">
        <FlashcardItemList />
      </div>
    </>
  );
}

export default FlashcardPage;
