<script>
  import { Template } from "svelte-native/components";
  import { ObservableArray } from "@nativescript/core";
  import {
    ListViewViewType,
    ListViewLoadOnDemandMode,
    ListViewLinearLayout,
    ListViewGridLayout,
    ListViewItemAnimation
  } from "nativescript-ui-listview";

  let length = 0;
  let items = new ObservableArray();
  items.on(ObservableArray.propertyChangeEvent, val => {
      length = items.length
  })
  setTimeout(() => items.push("123"), 1000);
</script>

<page>
  <actionBar title="Svelte Native App" />
  {#if length > 0}
    <radListView height="100%" {items}>
      <radListView.listViewLayout>
        <listViewLinearLayout
          itemHeight="auto"
          itemInsertAnimation={ListViewItemAnimation.Default} />
      </radListView.listViewLayout>
      <Template type={ListViewViewType.HeaderView}>
        <label text="header" />
      </Template>
      <Template type={ListViewViewType.ItemView} let:item>
        <label text={item} />
      </Template>
    </radListView>
  {/if}
</page>
